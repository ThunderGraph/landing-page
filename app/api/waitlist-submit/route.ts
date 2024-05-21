import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';

export async function POST(request: NextRequest) {
  // console.log(process.env.HUBSPOT_API_KEY )
  const accessToken = process.env.HUBSPOT_API_KEY
  const hubspotClient = new Client({ accessToken });
  const formData = await request.json();

  try {
    const contactObj = {
      properties: {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        company: formData.organization,
        jobtitle: formData.jobTitle,
      },
      associations: []
    };

    const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj);
    return NextResponse.json(createContactResponse);
  } catch (error) {
    console.error('Failed to post data to HubSpot:', error);
    return new NextResponse('Failed to post data to HubSpot', { status: 500 });
  }
}
