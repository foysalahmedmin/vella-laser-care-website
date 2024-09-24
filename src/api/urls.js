let current = process.env.NODE_ENV === "http://localhost:5000";

export const urls = {
  mainURL: `${current}`,
  frontend: "http://localhost:5173",
  userPhoto: `${current}/uploads/user-photos`,
  stripe_key:
    "test_###############################################################",
};
