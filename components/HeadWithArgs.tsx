import Head from 'next/head';

function HeadWithArgs() {
  // TODO: Add more meta data
  return (
    <Head>
      <title>dev.to Rising!</title>
      <link rel='icon' href='/dev-ecosystem.png' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta charSet='utf-8' />
      <meta
        name='description'
        content='dev.to Rising! Displays the most recent rising articles from dev.to. Sort articles by tags, or comments and never miss an article that is gaining momentum in the dev community'
      />
    </Head>
  );
}

export default HeadWithArgs;
