import { Component } from '@angular/core';
import { Header } from '@domains/home/components/header/header';
import { ProductivitySlider } from "@domains/home/components/productivity-slider/productivity-slider";

@Component({
  selector: 'app-home',
  imports: [Header, ProductivitySlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
