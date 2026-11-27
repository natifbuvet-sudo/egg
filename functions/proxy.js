export async function onRequestPost(context) {
  const raw = new URL(context.request.url).searchParams.get('endpoint') || 'ei/bot_first_contact';
  const ep = raw.startsWith('/') ? raw.slice(1) : raw;
  if (!['ei/bot_first_contact', 'ei/get_periodicals', 'ei/coop_status'].includes(ep)) return new Response('Forbidden', { status: 403 });
  const res = await fetch('https://www.auxbrain.com/' + ep, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: await context.request.text()
  });
  return new Response(await res.text(), {
    status: res.status,
    headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' }
  });
}
