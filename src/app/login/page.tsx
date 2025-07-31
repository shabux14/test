export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-extrabold text-primaryBlue mb-6 text-center">
        ورود به سامانه پایزن
      </h1>
      <p className="text-center text-secondaryOrange mb-12 font-medium">
        لطفاً اطلاعات خود را وارد کنید
      </p>

      <form className="w-full max-w-md space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-primaryBlue">نام کاربری</label>
          <input
            type="text"
            placeholder="نام کاربری"
            className="w-full p-4 rounded-lg border-2 border-secondaryOrange focus:border-accentYellow
            transition-colors duration-300 outline-none shadow-sm"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-primaryBlue">رمز عبور</label>
          <input
            type="password"
            placeholder="رمز عبور"
            className="w-full p-4 rounded-lg border-2 border-secondaryOrange focus:border-accentYellow
            transition-colors duration-300 outline-none shadow-sm"
          />
        </div>

        <div className="flex justify-between items-center text-sm text-primaryBlue">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" className="accent-secondaryOrange" />
            مرا به خاطر بسپار
          </label>
          <a href="#" className="hover:text-accentYellow transition-colors">فراموشی رمز عبور؟</a>
        </div>

        <button
          type="submit"
          className="w-full bg-secondaryOrange hover:bg-accentYellow text-white font-bold py-4 rounded-lg
          shadow-lg transition-colors duration-300 animate-pulse-fast"
        >
          ورود به سامانه
        </button>
      </form>
    </div>
  )
}
