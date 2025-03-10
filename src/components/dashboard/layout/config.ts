/*import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];*/
import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Estadisticas', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'users', title: 'Gestión de Usuarios', href: paths.dashboard.account, icon: 'users' },
  { key: 'publicidad', title: 'Publicidad de Cursos', href: paths.dashboard.courses, icon: 'publicidad' },
  { key: 'curso', title: 'Gestion de Curso', href: paths.dashboard.cursos, icon: 'courses' },
  { key: 'maestrias', title: 'Maestrias de cursos', href: paths.dashboard.maestrias, icon: 'maestrias' },
  { key: 'enrollments', title: 'Gestión de Matrículas', href: paths.dashboard.enrollments, icon: 'enrollments' },
  { key: 'forms', title: 'Gestión de Formularios', href: paths.dashboard.forms, icon: 'forms' },
  { key: 'notifications', title: 'Gestión de Notificaciones', href: paths.dashboard.notifications, icon: 'notifications' },
  { key: 'payments', title: 'Seguimiento de Pago', href: paths.dashboard.payments, icon: 'payments' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'carrusel', title: 'Cursos Presentación', href: paths.dashboard.carrusel, icon: 'presentation-chart' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
