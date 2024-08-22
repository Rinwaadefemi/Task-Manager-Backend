// WHAT IS MIDDLEWARE? - A middleware in backend development is like a middleman that sits between the incoming request from the client and the final response from the server. It's a function that can modify the request, process it, handle certain tasks before passsing it on to the next part of the code or sending back a response. POSTMAN IS A MIDDLEWARE.

const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
