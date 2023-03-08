import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { Url } from 'url';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    // http://localhost:3000/api/og?title=teste
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

    const hasImage = searchParams.has('image');
    const image = hasImage
      ? searchParams.get('image')?.slice(0, 100)
      : 'mage';
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#5762d5',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img
              alt={image}
              height={380}
              src={`https://raw.githubusercontent.com/juan-20/RPG/23078a56dad1fa28a696afac567fdf509fa2a3f4/assets/og/${image}.svg`}
              style={{ margin: '0 30px' }}
              width={380}
            />
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
