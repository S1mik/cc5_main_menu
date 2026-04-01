import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { useActivePage } from '@toolpad/core/useActivePage';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';


const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Администрирование',
  },
  {
    segment: 'network-architecture',
    title: 'Архитектура сети',
    icon: <LayersIcon />,
  },
  {
    segment: 'categories',
    title: 'Категории справочников',
    icon: <LayersIcon />,
  },
  {
    segment: 'group-operations',
    title: 'Групповые операции',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'group-ops-shops',
        title: 'Магазины',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'group-ops-cash-registers',
        title: 'Кассы',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'group-ops-virtual-cash',
        title: 'Виртуальные кассы',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'group-ops-scales',
        title: 'Весы',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'group-ops-price-checkers',
        title: 'Прайсчекеры',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'group-ops-price-printers',
        title: 'Прайспринтеры',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'Properties',
    title: 'Конфигурирование касс',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'configuration-labels',
        title: 'Конфигурационные метки',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'configurations',
        title: 'Конфигурации',
        icon: <DescriptionIcon />,
      },      
    ],
  },
  {
    segment: 'shops-audit',
    title: 'Аудит',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'users-audit-dictionaries',
        title: 'Аудит пользователей',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'dictionaries-export-audit',
        title: 'Аудит выгрузки справочников',
        icon: <DescriptionIcon />,
        children: [
          {
            segment: 'dictionaries-export-active-tasks',
            title: 'Активные задачи',
            icon: <DescriptionIcon />,
          },
          {
            segment: 'dictionaries-export-queued-tasks',
            title: 'Задачи в очереди',
            icon: <DescriptionIcon />,
          },
          {
            segment: 'dictionaries-export-queued-tasks-level-1',
            title: 'Задачи в очереди 1-го уровня',
            icon: <DescriptionIcon />,
          },
        ],
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Управление магазином',
  },
  {
    segment: 'mark',
    title: 'Маркировка',
    icon: <CenterFocusWeakIcon />,
  },
  {
    segment: 'goods-stocks',
    title: 'Остатки товаров по магазинам',
    icon: <LocalShippingOutlinedIcon />,
  },

  {
    segment: 'operday',
    title: 'Операционный день',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'operday-journal',
        title: 'Журнал операционных дней',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'shifts-journal',
        title: 'Журнал смен',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'operations-journal',
        title: 'Журнал операций',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'encashment',
        title: 'Инкассация',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'cashbook',
    title: 'Главная касса',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'cash-register-book',
        title: 'Кассовая книга',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'ko-document-templates',
        title: 'Шаблоны документов КО',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'Orders',
    title: 'Заказы',
    icon: <AppShortcutOutlinedIcon />,
    children: [
      {
        segment: 'soft-checks',
        title: 'Софт чеки',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'online-checks',
        title: 'Онлайн чеки',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'find',
    title: 'Поиск чеков',
    icon: <SearchOutlinedIcon />,
  },

  {
    segment: 'monitoring',
    title: 'Мониторинг касс',
    icon: <LayersIcon />,
  },
  {
    segment: 'Audit',
    title: 'Аудит',
    icon: <LocalPoliceOutlinedIcon />,
    children: [
      {
        segment: 'pendig',
        title: 'Отложенные чеки',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'storno',
        title: 'Удаленные товары и чеки',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'cashierlog',
        title: 'Журнал действий кассира',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Настройки',
  },
  {
    segment: 'shop-settings',
    title: 'Магазин',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'store-groups',
        title: 'Структурные метки',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'shop-settings-legal-entity-utm',
        title: 'Реквизиты юрлица УТМ',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'shop-settings-legal-entity-upd',
        title: 'Реквизиты юрлица УПД',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'shop-settings-regional',
        title: 'Региональные настройки',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'shop-settings-store-requisites',
        title: 'Реквизиты магазинов',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'exchange-settings',
    title: 'Обмен',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'exchange-schedules',
        title: 'Расписание',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'exchange-dictionaries-export',
        title: 'Выгрузка справочников',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'exchange-labels',
        title: 'Метки обмена',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'exchange-file-format',
        title: 'Формат файлового обмена',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'exchange-dictionaries',
        title: 'Справочники',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'exchange-sales',
        title: 'Продажи',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'exchange-excise-products',
        title: 'Акцизная продукция',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'exchange-db-migration',
        title: 'Миграция БД',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'exchange-online-checks',
        title: 'Онлайн чеки',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'equipment-settings',
    title: 'Оборудование',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'equipment-vpos-clusters',
        title: 'Кластеры VPOS',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'equipment-scales',
        title: 'Весы',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'equipment-price-checkers',
        title: 'Прайсчекеры',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'equipment-artix-pricechecker-2',
        title: 'Artix:PriceCheker 2.0',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'equipment-price-printers',
        title: 'Прайспринтеры',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'cash-register-settings',
    title: 'Кассы',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'equipment-vnc',
        title: 'VNC',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'equipment-ssh',
        title: 'SSH',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Интеграции',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'equipment-puppet',
        title: 'Puppet',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'artix-loyalty-sms',
        title: 'СМС',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'artix-loyalty-telegram-bot',
        title: 'Telegram-bot',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'artix-loyalty-cardsmobile',
        title: 'Cardsmobile',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'users-and-roles',
    title: 'Пользователи и роли',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'users',
        title: 'Пользователи',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'roles',
        title: 'Роли',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'access-rules',
        title: 'Правила доступа',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'active-directory',
        title: 'Active Directory',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'users-audit',
        title: 'Аудит',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'security',
        title: 'Безопасность',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'artix-loyalty',
    title: 'Artix:Loylaty',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'artix-loyalty-servers',
        title: 'Сервера Artix:Loyalty',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'artix-loyalty-discount-labels',
        title: 'Метки дисконта',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Отчеты',
  },
  {
    segment: 'cashier-discipline-and-efficiency',
    title: 'Кассовая дисциплина',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'cashier-speed',
        title: 'Скорость работы кассиров',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'cashiers-report',
        title: 'Отчет по кассирам',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'sales-by-cashiers',
        title: 'Продажи по кассирам',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'returns-by-cashiers',
        title: 'Возвраты по кассирам',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'sales-revenue-and-returns',
    title: 'Продажи и возвраты',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'cash-flow',
        title: 'Движение денежных средств',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'sales-and-returns',
        title: 'Продажи и возвраты',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'receipt-amounts',
        title: 'Суммы чеков',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'daily-sales-by-hour',
        title: 'Продажи за день по часам',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'load-and-queues-analysis',
    title: 'Анализ загрузки',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'cash-register-load-by-hour',
        title: 'Загрузка касс по часам',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'checkout-queues',
        title: 'Очереди на кассах',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'product-losses-and-errors-control',
    title: 'Потери и контроль ошибок',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'not-found-products',
        title: 'Ненайденные товары',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'manual-barcode-entry-products',
        title: 'Товары с ручным вводом ШК',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'storno-by-items',
        title: 'Сторнирование по позициям',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'sales-methods-and-receipt-work',
    title: 'Способы продаж',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'product-adding-methods',
        title: 'Способы добавления товаров',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'postponed-receipts',
        title: 'Отложенные чеки',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'marketing-and-loyalty',
    title: 'Маркетинг и лояльность',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'discounts-report',
        title: 'Отчет по скидкам',
        icon: <DescriptionIcon />,
      },
    ],
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  const activePage = useActivePage();
  const [missingImages, setMissingImages] = React.useState<Record<string, true>>(
    {},
  );

  if (pathname === '/') {
    return (
      <Box
        sx={{
          flex: 1,
          width: '100%',
          minHeight: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          p: { xs: 1, sm: 2, md: 3 },
          boxSizing: 'border-box',
        }}
      >
        <Box
          component="img"
          src="/images/index.png"
          alt=""
          sx={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>
    );
  }

  const activeSegment =
    activePage && activePage.path
      ? activePage.path.split('/').filter(Boolean).slice(-1)[0]
      : undefined;
  const hasMissingImage =
    activeSegment != null ? !!missingImages[activeSegment] : false;
  const leftMenuImageSrc =
    activeSegment != null && !hasMissingImage
      ? `/leftmenu/${activeSegment}.png`
      : null;

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {leftMenuImageSrc ? (
        <Box
          component="img"
          src={leftMenuImageSrc}
          alt=""
          sx={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          }}
          onError={() => {
            if (activeSegment) {
              setMissingImages((prev) => ({
                ...prev,
                [activeSegment]: true,
              }));
            }
          }}
        />
      ) : null}
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;

  const router = useDemoRouter('/');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // Remove this provider when copying and pasting into your project.
    <DemoProvider window={demoWindow}>
      {/* preview-start */}
      <AppProvider
        branding={{
          title: '',
          logo: (
            <img
              src="/images/logo.png"
              alt="Логотип"
              height={28}
              style={{ height: 28, width: 'auto', display: 'block' }}
            />
          ),
        }}
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
      {/* preview-end */}
    </DemoProvider>
  );
}
