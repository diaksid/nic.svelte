// See https://kit.svelte.dev/docs/types#app
declare namespace App {
  // interface Error {}

  interface Locals {
    userid: string;
  }

  // interface PageData {}
  // interface Platform {}
}

interface NavLink {
  label: string;
  href: string;
  target?: string;
  handle?: (event?: Event) => void;
  links?: NavLink[];
}

interface MenuItem {
  name: string;
  title?: string;
  handle?: (event?: Event) => void;
}

declare module '*?webp' {
  const value: any;
  export = value;
}

declare module '*&webp' {
  const value: any;
  export = value;
}