import { Component } from '@angular/core';
import { Header } from '@domains/home/components/header/header';
import { ProductivitySlider } from "@domains/home/components/productivity-slider/productivity-slider";
import { ActionCard } from "@domains/home/components/action-card/action-card";
import { MoreCards } from "@domains/home/components/more-cards/more-cards";
import { Footer } from "@components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, ProductivitySlider, ActionCard, MoreCards, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
