import { API } from "../config";

export async function getSampleUser() {
    const userRes = await fetch(API.sampleUser);
    const userInfo = await userRes.json();
    if (userRes?.status === 200)
      return userInfo;
    return null;
}
