export class AddMovie {
  category: String;
  description: String;
  movieUrl: String;
  thumbnailUrl: String;
  title: String;


  constructor(category?: String, description?: String,
              movieUrl?: String, thumbnailUrl?: String,
              title?: String) {
    this.category = category;
    this.description = description;
    this.movieUrl = movieUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.title = title;
  }
}
