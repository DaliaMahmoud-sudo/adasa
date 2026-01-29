import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Home } from "./home/home";
import { Blog } from "./blog/blog";
import { SpecificBlog } from "./specific-blog/specific-blog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Home, Blog, SpecificBlog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BlogApp');
}
