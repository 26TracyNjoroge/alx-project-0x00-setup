import Button from "@/components/Button";
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Button styles="rounded-full" width="w-full" title="Rounded Full" />
            <Button styles="rounded-lg" width="w-lg" title="Rounded Large" />
            <Button styles="rounded-md" width="w-md" title="Rounded Medium" />
            <Button styles="rounded-sm"  width="w-sm" title="Rounded Small" />

        </div>
    )
}
export default Landing;