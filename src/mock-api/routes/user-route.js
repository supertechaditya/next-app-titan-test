export function userRoutes(context) {
  return [
    context.get("/users"),
    context.get("/users/:id"),
    context.post("/users", { timing: 2000 }),
    context.patch("/users/:id"),
    context.delete("/users/:id"),
  ];
}
