import Image from 'next/image'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import PageContainer from '@/components/Containers/PageContainer'

export default function About() {
  return (
    <PageContainer>
      <Box sx={{ mt: 10, mb: 10 }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ mt: 2 }}>
            <Typography variant="h4">ABOUT BREW MATES</Typography>

            <Typography variant="body1" sx={{ mt: 4 }}>
              <strong>Brew Mates</strong> is a non-commercial homebrewery from Slovenia, whose story
              began in 2014, when my girlfriend surprised me with my first homebrewing kit. That
              first beer wasn’t the best—but it tasted like beer, and it was drinkable. From that
              moment, I was hooked. I quickly moved on to all-grain brewing and began experimenting
              with different styles and ingredients.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              With the great support of my friends and family, I built my own brewing system and
              later a temperature-controlled fermentation chamber—both of which helped me
              significantly improve the quality of my beers.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Over the years, I kept learning and refining my brewing skills. I visited many
              breweries, spoke with master brewers, and in 2017 earned a{' '}
              <Link
                href="https://www.ihps.si/izobrazevanje/npk-pivovar/"
                style={{ textDecoration: 'underline' }}
                target="_blank"
              >
                <strong>National Vocational Qualification in Brewing</strong>
              </Link>
              . While many pursue this qualification for professional reasons, I did it simply to
              deepen my understanding and passion for the craft. It was a great experience and
              taught me a lot.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Besides brewing, I also decided to <strong>grow my own hops</strong>. As some may
              know, Slovenia is renowned for its high-quality hop varieties, so I chose to cultivate
              three Slovene types: Styrian Dana, Aurora, and Celeia. I’ve even learned that hops
              were once grown in my hometown, and continuing that legacy makes the process feel even
              more meaningful. Growing my own hops adds a <strong>unique local character</strong> to
              my beers and allows me to explore techniques like wet hopping.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Throughout this journey, my friends and family have been by my side—helping,
              supporting, and most importantly, tasting. I brew exclusively for them, and for the
              joy of the process itself.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Brewing remains my favorite hobby, and I have many plans for the future—new styles to
              try, new gear to build, and new beers to share with the people I care about most.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }} fontWeight="bold">
              Thanks for being part of the story.
            </Typography>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Cheers,
            </Typography>
            <Typography variant="body1">Lino</Typography>
            <Typography variant="body2">Brewer behind Brew Mates</Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              mt: { xs: 0, md: 12 }
            }}
          >
            <Image
              src="/images/brewer.jpg"
              alt="Brew Mates"
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}
