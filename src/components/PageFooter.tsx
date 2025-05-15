function PageFooter() {
  return (
    <footer className="bg-slate-900 text-center text-xs text-slate-300 md:bg-transparent md:text-sm md:text-slate-700">
      Challenge by{' '}
      <a
        className="font-bold text-white hover:underline focus-visible:underline md:text-slate-900"
        href="https://www.frontendmentor.io?ref=challenge"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        className="md: font-bold text-white hover:underline focus-visible:underline md:text-slate-900"
        href="https://www.frontendmentor.io/profile/kaamiik"
      >
        Kamran Kiani
      </a>
      .
    </footer>
  );
}

export default PageFooter;