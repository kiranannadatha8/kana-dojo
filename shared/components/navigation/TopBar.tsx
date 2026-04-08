'use client';

import { Link } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import clsx from 'clsx';
import { Star, GraduationCap, Settings, FlaskConical, type LucideIcon } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
  charIcon?: string;
};

export default function TopBar() {
  const { playClick } = useClick();

  const navItems: NavItem[] = [
    { name: 'Kana', href: '/kana', charIcon: 'あ' },
    { name: 'Vocab', href: '/vocabulary', charIcon: '語' },
    { name: 'Kanji', href: '/kanji', charIcon: '字' },
    { name: 'Practice', href: '/kana-chart', icon: GraduationCap },
    { name: 'Progress', href: '/progress', icon: Star },
    { name: 'Preferences', href: '/preferences', icon: Settings },
    { name: 'Labs', href: '/experiments', icon: FlaskConical },
  ];

  return (
    <nav className='fixed top-0 right-0 left-0 z-50 border-b border-(--border-color) bg-(--background-color)'>
      <div className='flex h-20 items-center justify-between px-4 md:px-6'>
        {/* Logo */}
        <Link
          href='/'
          onClick={() => playClick()}
          className='flex items-center gap-3 text-lg font-medium text-(--main-color) transition-opacity hover:opacity-80'
        >
          <span className='text-3xl'>KanaDojo</span>
          <span className='text-3xl text-(--secondary-color)'>かな道場</span>
        </Link>

        {/* Navigation Links */}
        <div className='hidden items-center gap-1 md:flex'>
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => playClick()}
              className={clsx(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                'text-(--secondary-color) hover:bg-(--border-color) hover:text-(--main-color)',
              )}
            >
              {item.charIcon ? (
                <span className='text-base'>{item.charIcon}</span>
              ) : (
                item.icon && <item.icon className='size-4' />
              )}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
