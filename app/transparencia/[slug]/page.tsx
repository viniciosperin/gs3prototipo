import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { DocumentList } from '@/components/document-list';
import { ReportsContent, ComplaintsContent } from '@/components/transparency-extras';
import policies from '@/lib/transparency-data.json';
const slugs=[...Object.keys(policies),'denuncias','informes'];
export function generateStaticParams(){return slugs.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=policies[slug as keyof typeof policies];return {title:`${page?.title??(slug==='denuncias'?'Canal de Denuncias':'Informes')} — GS3`};}
export default async function TransparencyPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;if(!slugs.includes(slug))notFound();
 const page=policies[slug as keyof typeof policies];const title=page?.title??(slug==='denuncias'?'Canal de Denuncias':'Informes');
 return <><SiteHeader/><main className="transparency-page"><div className="transparency-banner"><img src="/assets/transparency-header.png" alt="Cosechadoras trabajando en el campo al atardecer" fetchPriority="high"/></div><div className="transparency-content"><div className="page-heading"><p className="eyebrow">Transparencia</p><h1>{title}</h1></div>{page&&<><div className="policy-intro">{page.intro.map(p=><p key={p}>{p}</p>)}</div><div className="policy-sections">{page.sections.map(section=><section className="policy-row" key={section.title}><h2>{section.title}</h2><div>{section.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div></section>)}</div></>}{slug==='informes'&&<ReportsContent/>}{slug==='denuncias'&&<ComplaintsContent/>}<DocumentList multiple={slug==='tasas'} year={['tasas','informes','denuncias'].includes(slug)}/></div><div className="bottom-wrap"><SiteFooter/></div></main></>;
}
