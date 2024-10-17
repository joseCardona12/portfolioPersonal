import "reflect-metadata";
import { container } from "tsyringe";
import { HomeViewService } from "../services/homeViewService";
import { HomeViewRepository } from "../repositories/homeViewRepository";
import HomeViewModel from "../models/homeViewModel";

container.registerSingleton<HomeViewModel>(HomeViewModel);
container.registerSingleton<HomeViewRepository>(HomeViewRepository);
container.registerSingleton<HomeViewService>(HomeViewService);
