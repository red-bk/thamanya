import Link from "next/link"
import { RiHome4Line, RiSearchLine } from "@remixicon/react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-24 text-center">
      <div className="max-w-md mx-auto">
        {/* 404 Number */}
        <h1 className="text-8xl font-bold text-white/20 mb-4">404</h1>

        {/* Main Message */}
        <h2 className="text-2xl font-semibold text-white mb-4">الصفحة غير موجودة</h2>

        <p className="text-white/70 mb-8 leading-relaxed">
          عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها. ربما تم حذفها أو نقلها إلى مكان آخر.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-white/90 transition-colors font-medium"
          >
            <RiHome4Line size={20} />
            العودة للرئيسية
          </Link>

          <Link
            href="javascript:history.back()"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
          >
            <RiSearchLine size={20} />
            الصفحة السابقة
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 opacity-20">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-white/30 flex items-center justify-center">
            <RiSearchLine size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
