import { BehaviorSubject } from 'rxjs';

export class ApiHelper {
  userData: BehaviorSubject<any> = new BehaviorSubject<any>({});
  loginRegister: BehaviorSubject<string> = new BehaviorSubject<string>('login');
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  sections = [
    { title: 'Anime', body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium officia in corporis excepturi necessitatibus tempora reiciendis saepe blanditiis voluptate iure.', url: 'anime' },
    { title: 'Games', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, id vel officiis harum voluptatibus velit veniam adipisci? Id, dolorem cum.', url: 'games' },
    { title: 'Music', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero laudantium nostrum et debitis rerum esse voluptas incidunt quo dolore?', url: 'music' },
    { title: 'Books', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero laudantium nostrum et debitis rerum esse voluptas incidunt quo dolore?', url: 'books' },
    { title: 'Movies', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero laudantium nostrum et debitis rerum esse voluptas incidunt quo dolore?', url: 'movies' },
    { title: 'Others', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero laudantium nostrum et debitis rerum esse voluptas incidunt quo dolore?', url: 'others' },
  ];

  roles = [
    { label: 'anime', value: 'anime' },
    { label: 'games', value: 'games' },
    { label: 'music', value: 'music' },
    { label: 'books', value: 'books' },
    { label: 'movies', value: 'movies' },
    { label: 'others', value: 'others' },
  ];
}