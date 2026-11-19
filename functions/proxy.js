export async function onRequestPost(context) {
  const body = await context.request.text();
  const res = await fetch('https://www.auxbrain.com/ei/bot_first_contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body
  });
  return new Response(await res.text(), {
    status: res.status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
