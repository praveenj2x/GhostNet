import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getUserOrganization, getPendingInvitations } from "@/actions/organization";
import { getOrganizationTeams, getOrganizationMembers } from "@/actions/teams";
import { redirect } from "next/navigation";
import { Users, UserPlus, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PendingInvitationsCard } from "@/components/pending-invitations-card";
import { HalloweenBanner } from "@/components/halloween-banner";
import { HalloweenDecorations } from "@/components/halloween-decorations";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  const organization = await getUserOrganization();

  if (!organization) {
    redirect("/onboarding");
  }

  const teamsResult = await getOrganizationTeams(organization.id);
  const membersResult = await getOrganizationMembers(organization.id);
  const pendingInvitations = await getPendingInvitations();

  const teams = teamsResult.success ? teamsResult.teams : [];
  const members = membersResult.success ? membersResult.members : [];

  return (
    <>
      <HalloweenDecorations />
      <div className="space-y-8 relative z-10">
        <HalloweenBanner />
        {pendingInvitations.length > 0 && (
          <PendingInvitationsCard invitations={pendingInvitations} />
        )}

        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back, {session.user.name}!
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-primary/30 bg-gradient-to-br from-card to-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Teams</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-3xl animate-glow">🎃</span>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{teams?.length || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Active teams in your organization
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/30 bg-gradient-to-br from-card to-secondary/5 hover:shadow-lg hover:shadow-secondary/20 transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-3xl animate-pulse-glow">👻</span>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">{members?.length || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">
                People in your organization
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-gradient-to-br from-card to-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Invites</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-3xl animate-float">🦇</span>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{pendingInvitations.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Awaiting acceptance
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Teams</CardTitle>
            </CardHeader>
            <CardContent>
              {teams && teams.length > 0 ? (
                <div className="space-y-3">
                  {teams.slice(0, 5).map((team: any) => (
                    <div
                      key={team.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{team.name}</p>
                        {team.description && (
                          <p className="text-sm text-muted-foreground">
                            {team.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No teams yet</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Members</CardTitle>
            </CardHeader>
            <CardContent>
              {members && members.length > 0 ? (
                <div className="space-y-3">
                  {members.slice(0, 5).map((member: any) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {member.user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{member.user.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.user.email}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs bg-secondary px-2 py-1 rounded">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No members yet</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}