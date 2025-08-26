export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-visible">
        
        <div className="relative flex items-center justify-center bg-white p-10">
  <div className="absolute top-6 left-6 z-40">
    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
      <div className="w-5 h-5 bg-white rounded-md"></div>
    </div>
  </div>

  <div className="relative w-full max-w-md min-h-[630px] flex items-center justify-center">
    <div className="absolute inset-0 m-6 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-200 shadow-inner border border-gray-200"></div>

    <img
      src="/illustration.png"
      alt="Illustration"
      className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
             w-[420px] h-auto drop-shadow-xl" 
    />

    <div className="absolute top-6 right-10 w-6 h-6 bg-blue-200/30 rounded-full blur-sm"></div>
    <div className="absolute bottom-16 left-10 w-4 h-4 bg-orange-200/40 rounded-full blur-sm"></div>
    <div className="absolute top-16 left-12 w-3 h-3 bg-green-200/50 rounded-full blur-sm"></div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center bg-white p-8 lg:p-12">
          <div className="absolute top-6 right-6 text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Sign up
            </a>
          </div>

          <div className="w-full max-w-sm mx-auto mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign in</h1>
            <p className="text-gray-600 mb-8 text-lg">Sign in with Open account</p>

            <div className="flex gap-3 mb-8">
              <button className="flex-1 flex items-center justify-center gap-3 p-4 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 text-gray-700">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium">Google</span>
              </button>

              <button className="flex-1 flex items-center justify-center gap-3 p-4 bg-black text-white rounded-xl shadow-sm hover:bg-gray-900 hover:shadow-md transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C9.396 0 8.417 1.794 8.417 1.794S7.291.015 4.865.015c-2.69 0-3.813 2.204-3.813 2.204-.353.588-.61 1.76-.61 2.594C.442 7.4.61 9.222 1.394 10.743c.726 1.409 1.886 2.618 3.206 3.202.525.233.85.312 1.109.312.386 0 .829-.129 1.378-.405l.233-.116c.547-.273.95-.405 1.378-.405.428 0 .831.132 1.378.405l.233.116c.549.276.992.405 1.378.405.259 0 .584-.079 1.109-.312 1.32-.584 2.48-1.793 3.206-3.202.784-1.521.952-3.343.952-5.930 0-.834-.257-2.006-.61-2.594 0 0-1.123-2.204-3.813-2.204C16.709.015 15.583 1.794 15.583 1.794S14.604 0 12.017 0z" />
                </svg>
                <span className="text-sm font-medium">Apple ID</span>
              </button>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with email address
                </span>
              </div>
            </div>

            <div className="mb-4 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </span>
              <input
                type="email"
                placeholder="tam@jill.net"
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm shadow-sm hover:shadow-md transition-shadow"
              />
            </div>

            <div className="mb-8 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </span>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm shadow-sm hover:shadow-md transition-shadow"
              />
            </div>
            
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
