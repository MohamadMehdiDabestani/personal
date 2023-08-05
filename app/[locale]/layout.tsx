import { Layout } from 'ui/src/client/layout';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { StyleConfig } from '@org/ui';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <body>
        <StyleConfig options={{ key: 'mui' }}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Layout>{children}</Layout>
          </NextIntlClientProvider>
        </StyleConfig>
      </body>
    </html>
  );
}
