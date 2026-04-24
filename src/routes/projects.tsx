import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: ProjectsRoute,
});

function ProjectsRoute() {
  return <Navigate to="/" replace />;
}
