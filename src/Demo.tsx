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
    link: "http://192.169.1.110:1413/CC5/administration/shops/list",
  },
  {
    segment: 'monitoring_cash',
    title: 'Доска мониторинга',
    icon: <LayersIcon />,
  },
  {
    segment: 'categories',
    title: 'Категории справочников',
    icon: <LayersIcon />,
    link: "http://192.169.1.110:1413/CC5/administration/shops/dictionaries-groups", 
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
        link:"http://192.169.1.110:1413/CC5/administration/shops/group-operations/shops",
      },
      {
        segment: 'group-ops-cash-registers',
        title: 'Кассы',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/shops/group-operations/cashes"
      },
      {
        segment: 'group-ops-virtual-cash',
        title: 'Виртуальные кассы',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/shops/group-operations/virtual-cashes",
      },
      {
        segment: 'group-ops-scales',
        title: 'Весы',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/shops/group-operations/scales",
      },
      {
        segment: 'group-ops-price-checkers',
        title: 'Прайсчекеры',
        icon: <DescriptionIcon />,
        link: "http://192.169.1.110:1413/CC5/administration/shops/group-operations/price-checkers",
      },
      {
        segment: 'group-ops-price-printers',
        title: 'Прайспринтеры',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/shops/group-operations/price-printers",
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
        link:"http://192.169.1.110:1413/CC5/administration/configs/tags",
      },
      {
        segment: 'configurations',
        title: 'Конфигурации',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/configs/list",
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
        link:"http://192.169.1.110:1413/CC5/administration/users/audit",
      },
      {
        segment: 'dictionaries-export-audit',
        title: 'Аудит выгрузки справочников',
        icon: <DescriptionIcon />,
        children: [
          { //Всех детей в горизонтальные табы
            segment: 'dictionaries-export-active-tasks',
            title: 'Активные задачи',
            icon: <DescriptionIcon />,
            link:"http://192.169.1.110:1413/CC5/administration/exchange/streams/active",
          },
          {
            segment: 'dictionaries-export-queued-tasks',
            title: 'Задачи в очереди',
            icon: <DescriptionIcon />,
            link:"http://192.169.1.110:1413/CC5/administration/exchange/streams/second-queue",
          },
          {
            segment: 'dictionaries-export-queued-tasks-level-1',
            title: 'Задачи в очереди 1-го уровня',
            icon: <DescriptionIcon />,
            link:"http://192.169.1.110:1413/CC5/administration/exchange/streams/first-queue",
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
    link:"http://192.169.1.110:1413/CC5/administration/shops/dictionaries-groups/All/reference-books/statuses-of-marked-goods",
  },
  {
    segment: 'goods-stocks',
    title: 'Остатки по магазинам',
    icon: <LocalShippingOutlinedIcon />,
    link:"http://192.169.1.110:1413/CC5/administration/shops/dictionaries-groups/All/reference-books/remaining-goods-from-stores",
  },

  {
    segment: 'operday',
    title: 'Опердень',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'operday-journal',
        title: 'Журнал опердней',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/store/operating-day/All/operating-days",
      },
      {
        segment: 'shifts-journal',
        title: 'Журнал смен',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/store/operating-day/All/shift-log",
      },
      {
        segment: 'operations-journal',
        title: 'Журнал операций',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/store/operating-day/All/operation-log",
      },
      {
        segment: 'encashment',
        title: 'Инкассация',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/store/operating-day/All/encashments",
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
        link:"http://192.169.1.110:1413/CC5/store/main-cash/All/cash-book",
      },
      {
        segment: 'ko-document-templates',
        title: 'Шаблоны документов КО',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/store/main-cash/document-templates",
      },
    ],
  },
  {
    //Еще нет этого раздела
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
    link:"http://192.169.1.110:1413/CC5/store/_shop_321_41f6d95e/receipts",
  },

  {
    segment: 'monitoring',
    title: 'Мониторинг касс',
    icon: <LayersIcon />,
    link:"http://192.169.1.110:1413/CC5/store/_shop_321_41f6d95e/monitoring-cashes",
  },
  {
    segment: 'Audit',
    title: 'Аудит кассовых операций',
    icon: <LocalPoliceOutlinedIcon />,
    children: [
      {
        segment: 'pendig',
        title: 'Отложенные чеки',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/store/audit/_shop_321_41f6d95e/pending-checks",
      },
      {
        segment: 'storno',
        title: 'Удаленные товары и чеки',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/store/audit/_shop_321_41f6d95e/canceled-goods-receipts",
      },
      {
        segment: 'cashierlog',
        title: 'Журнал действий кассира',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/store/audit/_shop_321_41f6d95e/security-log",
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
        link:"http://192.169.1.110:1413/CC5/administration/shops/tag-groups",
      },
      {
        segment: 'shop-settings-legal-entity-utm',
        title: 'Реквизиты юрлица УТМ',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/shops/requisites/organizations",
      },
      {
        segment: 'shop-settings-legal-entity-upd',
        title: 'Реквизиты юрлица УПД',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/shops/requisites/vendors",
      },
      {
        segment: 'shop-settings-regional',
        title: 'Региональные настройки',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/shops/settings/region",
      },
      {
        segment: 'shop-settings-store-requisites',
        title: 'Маска номера счет-фактуры', 
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/shops/settings/waybill",
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
        link:"http://192.169.1.110:1413/CC5/administration/exchange/planners",
      },
      {
        segment: 'exchange-dictionaries-export',
        title: 'Выгрузка справочников',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/exchange/tasks",
      },
      {
        segment: 'exchange-labels',
        title: 'Метки обмена',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/exchange/tags",
      },
      {
        segment: 'exchange-file-format',
        title: 'Формат файлового обмена',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/exchange/settings/formats",
      },
      {
        segment: 'exchange-dictionaries',
        title: 'Справочники',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/exchange/settings/dictionaries",
      },
      {
        segment: 'exchange-sales',
        title: 'Продажи',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/exchange/settings/sales",
      },
      {
        segment: 'exchange-excise-products',
        title: 'Акцизная продукция',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/exchange/settings/excise-products",
      },
      {
        segment: 'exchange-db-migration',
        title: 'Миграция БД',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/exchange/settings/db-migration",
      },
      {
        segment: 'exchange-online-checks',
        title: 'Онлайн чеки',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/equipment/online-receipts",
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
        link:"http://192.169.1.110:1413/CC5/administration/equipment/vpos-clusters",
      },
      {
        segment: 'equipment-scales',
        title: 'Весы',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/equipment/scales",
      },
      {
        segment: 'equipment-price-checkers',
        title: 'Прайсчекеры',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/equipment/pricecheckers",
      },
      {
        segment: 'equipment-artix-pricechecker-2',
        title: 'Artix:PriceCheker 2.0',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/equipment/artixPriceChecker2",
      },
      {
        segment: 'equipment-price-printers',
        title: 'Прайспринтеры',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/equipment/priceprinters",
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
        link:"http://192.169.1.110:1413/CC5/administration/equipment/vnc",
      },
      {
        segment: 'equipment-ssh',
        title: 'SSH',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/equipment/ssh",
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
        link:"http://192.169.1.110:1413/CC5/administration/configs/puppet",
      },
      {
        segment: 'artix-loyalty-sms',
        title: 'СМС',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/artix-loyalty/sms",
      },
      {
        segment: 'artix-loyalty-telegram-bot',
        title: 'Telegram-bot',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/artix-loyalty/telegram",
      },
      {
        segment: 'artix-loyalty-cardsmobile',
        title: 'Cardsmobile',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/artix-loyalty/cardsmobile"
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
        link:"http://192.169.1.110:1413/CC5/administration/users/list",
      },
      {
        segment: 'roles',
        title: 'Роли',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/users/roles",
      },
      {
        segment: 'access-rules',
        title: 'Правила доступа',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/users/access-to-shops",
      },
      {
        segment: 'active-directory',
        title: 'Active Directory',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/users/settings/active-directory",
      },
      {
        segment: 'users-audit',
        title: 'Параметры аудита', 
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/users/settings/audit",
      },
      {
        segment: 'security',
        title: 'Безопасность',
        icon: <DescriptionIcon />,
        link: "http://192.169.1.110:1413/CC5/administration/users/settings/security",
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
        link:"http://192.169.1.110:1413/CC5/administration/artix-loyalty/servers",
      },
      {
        segment: 'artix-loyalty-discount-labels',
        title: 'Метки дисконта',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/administration/artix-loyalty/tag-groups",
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
    title: 'Работа кассиров',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'cashier-speed',
        title: 'Скорость работы кассиров',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/cashierWorkSpeedReport",
      },
      {
        segment: 'cashiers-report',
        title: 'Отчет по кассирам',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/saleByCashier",
      },
      {
        segment: 'sales-by-cashiers',
        title: 'Продажи по кассирам',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/salesByCashier",
      },
      {
        segment: 'returns-by-cashiers',
        title: 'Возвраты по кассирам',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/refundByCashier",
      },
      {
        segment: 'postponed-receipts',
        title: 'Отложенные чеки',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/stuckPendingCheck",
      },
      {
        segment: 'cash-flow',
        title: 'Движение денежных средств',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/cashflow",
      },
    ],
  },
  {
    segment: 'sales-revenue-and-returns',
    title: 'Продажи и возвраты',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'sales-and-returns',
        title: 'Продажи и возвраты',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/salesAndRefundByCashier",
      },
      {
        segment: 'receipt-amounts',
        title: 'Суммы чеков',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/sumCashDocument",
      },
      {
        segment: 'daily-sales-by-hour',
        title: 'Продажи за день по часам',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/shortByWorkshifts",
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
        link:"http://192.169.1.110:1413/CC5/reports/loadingCashesByHours",
      },
      {
        segment: 'checkout-queues',
        title: 'Очереди на кассах',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/queueByShops",
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
        link:"http://192.169.1.110:1413/CC5/reports/notFoundItem",
      },
      {
        segment: 'storno-by-items',
        title: 'Сторнирование по позициям',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/stornoByPosition",
      },
    ],
  },
  {
    segment: 'sales-methods-and-receipt-work',
    title: 'Способы работы с товарами',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'product-adding-methods',
        title: 'Способы добавления товаров',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/waysToAddTmc",
      },
      {
        segment: 'manual-barcode-entry-products',
        title: 'Товары с ручным вводом ШК',
        icon: <DescriptionIcon />,
        link:"http://192.169.1.110:1413/CC5/reports/unreadableBarcode",
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
        link:"http://192.169.1.110:1413/CC5/reports/discountReport",
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
