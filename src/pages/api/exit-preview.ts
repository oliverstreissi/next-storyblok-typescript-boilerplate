import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const exit: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { slug = '' } = req.query;
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // set the cookies to None
  const cookies: string[] = (res.getHeader('Set-Cookie') as string[]) || [];
  res.setHeader(
    'Set-Cookie',
    cookies.map((cookie) =>
      cookie.replace('SameSite=Lax', 'SameSite=None;Secure')
    )
  );

  // Redirect the user back to the index page.
  res.redirect(`/${slug}`);
};

export default exit;
