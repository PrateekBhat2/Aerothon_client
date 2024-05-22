import DevCard from "./DevCard";

export default function AboutUs() {
    return (
        <div>
            <h1 className="text-4xl mb-20 text-center mt-20"> About Our Team </h1>
            <div className="flex flex-row flex-wrap justify-around">
                <DevCard Name = "Prateek Bhat" Role = "Fullstack Developer" source = "src/utils/Prateek.jpeg" LinkedIn = "https://www.linkedin.com/in/prateek-bhat-6a9668238/" Email = "prateekbhat255@gmail.com"/>
                <DevCard Name = "Prateek Bhat" Role = "Fullstack Developer" source = "src/utils/Prateek.jpeg" LinkedIn = "https://www.linkedin.com/in/prateek-bhat-6a9668238/" Email = "prateekbhat255@gmail.com"/>
                <DevCard Name = "Prateek Bhat" Role = "Fullstack Developer" source = "src/utils/Prateek.jpeg" LinkedIn = "https://www.linkedin.com/in/prateek-bhat-6a9668238/" Email = "prateekbhat255@gmail.com"/>
            </div>
        </div>
    );
}