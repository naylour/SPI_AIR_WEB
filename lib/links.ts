import CalendarClock from '@lucide/svelte/icons/calendar-clock';
import Hotel from '@lucide/svelte/icons/hotel';
import User from '@lucide/svelte/icons/user';
import Home from '@lucide/svelte/icons/home';

import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface NavLink extends Partial<HTMLAnchorAttributes> {
    title: string;
    href: string;
    'aria-label': string;
    icon: typeof CalendarClock | typeof Hotel | typeof User | typeof Home;
}

export const navlinks: NavLink[] = [
    {
        title: 'Объекты',
        href: '/',
        'aria-label': 'Ссылка на главную',
        icon: Hotel
    },
    {
        title: 'События',
        href: '/events',
        'aria-label': 'Ссылка на события',
        icon: CalendarClock
    },
    {
        title: 'Профиль',
        href: '/user',
        'aria-label': 'Ссылка на профиль',
        icon: User
    }
] as const;
