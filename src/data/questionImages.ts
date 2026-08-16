/**
 * One image per question, keyed by question id.
 *
 * These are atmospheric rather than informative: they comment on the question
 * and give the page rhythm, but they carry no meaning the text does not already
 * carry. That is why they are rendered as decorative (empty alt, aria-hidden)
 * rather than described. A screen reader user loses nothing by skipping them,
 * and inventing descriptions would only add noise.
 *
 * Served from the Unsplash CDN with sizing and format parameters, so what
 * arrives is a resized modern-format image rather than a full-size JPEG.
 * Photos are used under the Unsplash licence.
 */
const UNSPLASH = 'https://images.unsplash.com';

/** Width in CSS pixels of the widest place a card image is drawn. */
const BASE_WIDTH = 720;

export const imageUrl = (id: string, width: number = BASE_WIDTH): string =>
  `${UNSPLASH}/${id}?auto=format&fit=crop&w=${width}&q=60`;

/** Two widths so the browser can pick, retina included, without wasting bytes. */
export const imageSrcSet = (id: string): string =>
  [`${imageUrl(id, 480)} 480w`, `${imageUrl(id, 720)} 720w`, `${imageUrl(id, 1080)} 1080w`].join(
    ', ',
  );

export const questionImages: Record<string, string> = {
  // Leadership and sponsorship
  'lead-01': 'photo-1507679799987-c73779587ccf',
  'lead-02': 'photo-1505778276668-26b3ff7af103',
  'lead-04': 'photo-1518281361980-b26bfd556770',
  'lead-05': 'photo-1619477274083-4c7f5045573a',
  'lead-06': 'photo-1554224155-6726b3ff858f',
  'lead-07': 'photo-1600880292089-90a7e086ee0c',

  // Use cases and value
  'case-01': 'photo-1542621334-a254cf47733d',
  'case-02': 'photo-1550985543-49bee3167284',
  'case-03': 'photo-1522071820081-009f0129c71c',
  'case-04': 'photo-1468779036391-52341f60b55d',
  'case-05': 'photo-1532094349884-543bc11b234d',
  'case-06': 'photo-1494548162494-384bba4ab999',
  'case-07': 'photo-1521791136064-7986c2920216',

  // People readiness
  'ppl-01': 'photo-1643695211836-1b721438f9e6',
  'ppl-02': 'photo-1501386761578-eac5c94b800a',
  'ppl-03': 'photo-1517502884422-41eaead166d4',
  'ppl-04': 'photo-1709572374648-cd00913a3a6e',
  'ppl-05': 'photo-1496294439361-e8bcfef35916',
  'ppl-06': 'photo-1517486808906-6ca8b3f04846',
  'ppl-07': 'photo-1452860606245-08befc0ff44b',

  // Skills
  'skill-01': 'photo-1471107340929-a87cd0f5b5f3',
  'skill-02': 'photo-1586769852836-bc069f19e1b6',
  'skill-03': 'photo-1634224152857-69c415153d4a',
  'skill-04': 'photo-1575318634028-6a0cfcb60c59',
  'skill-05': 'photo-1587740896339-96a76170508d',
  'skill-06': 'photo-1488485282435-e2ad51917a76',
  'skill-07': 'photo-1531856396526-a0c8d7bd628b',
  'skill-08': 'photo-1457530378978-8bac673b8062',
  'skill-09': 'photo-1606326608726-07a8ee903449',

  // Enablement ecosystem
  'enab-01': 'photo-1578357078586-491adf1aa5ba',
  'enab-02': 'photo-1516738901171-8eb4fc13bd20',
  'enab-03': 'photo-1498931299472-f7a63a5a1cfa',
  'enab-04': 'photo-1603058817990-2b9a9abbce86',
  'enab-05': 'photo-1509062522246-3755977927d7',
  'enab-06': 'photo-1546435269-527d657231eb',
  'enab-07': 'photo-1519683109079-d5f539e1542f',

  // Measurement
  'meas-01': 'photo-1543165796-5426273eaab3',
  'meas-02': 'photo-1551288049-bebda4e38f71',
  'meas-03': 'photo-1518976024611-28bf4b48222e',
  'meas-04': 'photo-1573497620053-ea5300f94f21',
  'meas-05': 'photo-1595026525047-dfa997df8a4a',
  'meas-06': 'photo-1475483768296-6163e08872a1',
  'meas-07': 'photo-1572670014853-1d3a3f22b40f',
  'meas-08': 'photo-1623438744990-f47414813a29',
  'meas-09': 'photo-1579059155072-d967ab5e939c',
  'meas-10': 'photo-1753977725475-41b221add2c0',
};
