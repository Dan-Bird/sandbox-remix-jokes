import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: '~/styles/jokes.css',
    },
  ];
};

export default function jokesRoute() {
  return (
    <div>
      <h1>J🤪kes</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
