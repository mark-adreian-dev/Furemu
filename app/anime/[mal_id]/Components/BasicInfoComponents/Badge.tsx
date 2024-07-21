const Badge = ({ text }: { text: string }) => {
  return (
    <div className="bg-accent rounded-full px-[0.625rem] mr-1 mb-2">
        <p className="leading-6 text-sm text-dark-blue font-semibold">{text}</p>
    </div>
  )
}
export default Badge