import DigestClient from "digest-fetch";

export async function turnPlugOn(ip: string, username: string, password: string) {
  const client = new DigestClient(username, password, { algorithm: "SHA-256" });
  try {
    const res = await client.fetch(`http://${ip}/rpc/Switch.Set?id=0&on=true`);
    return await res.json();
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function turnPlugOff(ip: string, username: string, password: string) {
  const client = new DigestClient(username, password, { algorithm: "SHA-256" });
  try {
    const res = await client.fetch(`http://${ip}/rpc/Switch.Set?id=0&on=false`);
    return await res.json();
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function togglePlug(ip: string, username: string, password: string) {
  const client = new DigestClient(username, password, { algorithm: "SHA-256" });
  try {
    const res = await client.fetch(`http://${ip}/rpc/Switch.Toggle?id=0`);
    return await res.json();
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function getPlugStatus(ip: string, username: string, password: string) {
  const client = new DigestClient(username, password, { algorithm: "SHA-256" });
  try {
    const res = await client.fetch(`http://${ip}/rpc/Switch.GetStatus?id=0`);
    return await res.json();
  } catch (err) {
    console.log(err);
    return {};
  }
}
