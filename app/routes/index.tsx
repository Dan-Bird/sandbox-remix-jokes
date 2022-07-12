import type { LinksFunction, MetaFunction } from '@remix-run/node';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export const meta: MetaFunction = () => ({
  title: "Remix: So great, it's funny!",
  description: 'Remix jokes app. Learn Remix and laugh at the same time!',
});

export default function IndexRoute() {
  return <div>Hello Index Route</div>;
}
