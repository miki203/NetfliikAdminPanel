export class Movie {
  category: String;
  description: String;
  movieUrl: String;
  thumbnailUrl: String;
  timestamp: number;
  title: String;


  constructor(category?: String, description?: String,
              movieUrl?: String, thumbnailUrl?: String,
              timestamp?: number, title?: String) {
    this.category = category;
    this.description = description;
    this.movieUrl = movieUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.timestamp = timestamp;
    this.title = title;
  }
}
