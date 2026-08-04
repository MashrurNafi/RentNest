import express, { Application, Request, Response } from "express";
import config from "./config";
import cors from "cors";
import { authRoutes } from "./modules/auth/auth.route";
import { adminRoutes } from "./modules/admin/admin.routes";
import { categoryRoutes } from "./modules/category/category.routes";
import { landlordRoutes } from "./modules/landlord/landlord.route";
import { propertyRoutes } from "./modules/property/property.routes";
import { rentalRoutes } from "./modules/rental/rental.routes";
import { reviewRoutes } from "./modules/review/review.routes";

const app: Application = express();

app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);

app.get("/", async (req: Request, res: Response) => {
  res.send("RentNest Backend is Online!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoryRoutes)
app.use("/api/landlord", landlordRoutes)
app.use("/api/properties", propertyRoutes)
app.use("/api/rentals", rentalRoutes)
app.use("/api/reviews", reviewRoutes)






export default app;
