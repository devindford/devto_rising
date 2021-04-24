import Head from 'next/head';

function HeadWithArgs() {
  // TODO: Add more meta data
  return (
    <Head>
      <title>dev.to Rising!</title>
      <link rel='icon' href='/dev-ecosystem.png' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta charSet='utf-8' />
      <meta name='robots' content='index, follow' />
      <meta
        name='description'
        content='dev.to Rising! Displays the most recent rising articles from dev.to. Sort articles by tags, or comments and never miss an article that is gaining momentum in the dev community'
      />
      {/* OG Data */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='dev.to Rising!' />
      <meta
        property='og:image:alt'
        content='A website that is showing the top articles on the rise from dev.to'
      />

      <meta
        property='og:description'
        content='dev.to Rising! Displays the most recent rising articles from dev.to. Sort articles by tags, or comments and never miss an article that is gaining momentum in the dev community'
      />
      <meta property='og:image' content='https://imgur.com/IW9bGtk.png' />
      <meta property='og:url' content='https://devtorising.com' />
      <meta property='og:site_name' content='dev.to rising' />
      {/* Twitter Data */}
      <meta name='twitter:title' content='dev.to Rising!' />
      <meta
        name='twitter:description'
        content='dev.to Rising! Displays the most recent rising articles from dev.to. Sort articles by tags, or comments and never miss an article that is gaining momentum in the dev community'
      />
      <meta name='twitter:image' content='https://imgur.com/IW9bGtk.png' />
      <meta
        name='twitter:image:alt'
        content='A website that is showing the top articles on the rise from dev.to'
      />
      <meta name='twitter:creator' content='@devindford' />
    </Head>
  );
}

export default HeadWithArgs;
