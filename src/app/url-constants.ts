export class UrlConstants {

  public static URL_USERS = 'http://localhost:8761/api/users';
  public static URL_MOVIES = 'http://localhost:8761/api/movies';

  public static URL_USERS_CHANGE_PASS = UrlConstants.URL_USERS + '/password';
  public static URL_USERS_CREATE = UrlConstants.URL_USERS + '/create';

  public static URL_MOVIES_GET_MOVIE = UrlConstants.URL_MOVIES + '/movie';
  public static URL_MOVIES_GET_CATEGORY = UrlConstants.URL_MOVIES + '/category';
  public static URL_MOVIES_ADD_MOVIE = UrlConstants.URL_MOVIES + '/add';
  public static URL_MOVIES_ADD_TO_MY_LIST = UrlConstants.URL_MOVIES + '/save';
  public static URL_MOVIES_MY_LIST = UrlConstants.URL_MOVIES + '/saved';
}
