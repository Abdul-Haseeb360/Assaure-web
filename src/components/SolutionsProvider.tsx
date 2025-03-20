import Link from "next/link";
import { Container } from "./Container";
import { SolutionProviderProps } from "@/types/type";
export default function SolutionsProvider({
  showLearnMoreButton = true,
}: SolutionProviderProps) {
  return (
    <Container>
      <main className="">
        <section className=" mx-auto py-12 ">
          <div className="flex flex-col md:flex-row gap-8 items-start ">
            <div className="md:w-1/3 ">
              <h1 className="text-secondary-gray font-plusJakarta text-[32px] font-medium leading-normal not-italic max-w-[400px]">
                Trusted{" "}
                <span className="text-primary-green text-[32px] leading-normal not-italic font-bold">
                  ESG
                </span>
                <br />
                Solutions Provider
              </h1>
              {showLearnMoreButton && (
                <Link
                  href="#"
                  className="inline-block mt-4 font-montserrat text-gray-800 border-b-2 border-transparent hover:border-b-2 transition-colors duration-700 hover:border-primary-green pb-1 font-medium"
                >
                  Learn more
                </Link>
              )}
            </div>
            <div className="md:w-2/3">
              <p className="text-[#232323] text-[20px] font-montserrat leading-8 not-italic font-normal">
                At ASSURE, we are dedicated to promoting ethical, safe, and
                sustainable business practices. With a team of highly skilled
                professionals and APSCA- registered auditors, we have earned the
                trust of industries worldwide through our expertise in social
                compliance, sustainability, and safety assessments.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}
