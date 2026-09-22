
"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";

import { Disease } from "@/types/disease";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

import DiseaseCard from "./DiseaseCard";
import DiseaseSearch from "./DiseaseSearch";
import DiseaseCategories from "./DiseaseCategories";

interface DiseaseListProps {
  diseases: Disease[];
}

const PAGE_SIZE = 9;

export default function DiseaseList({
  diseases,
}: DiseaseListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filteredDiseases = useMemo(() => {
    const query = search.trim().toLowerCase();

    return diseases.filter((disease) => {
      const matchesCategory =
        category === "All" ||
        disease.category.toLowerCase() === category.toLowerCase();

      const searchableText = [
        disease.name,
        disease.slug,
        disease.category,
        disease.overview,
        ...disease.symptoms,
        ...disease.causes,
        ...disease.riskFactors,
        ...disease.diagnosis,
        ...disease.treatment,
        ...disease.prevention,
        ...disease.complications,
        ...disease.emergencySigns,
        ...disease.faqs.flatMap((faq) => [
          faq.question,
          faq.answer,
        ]),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [diseases, search, category]);

  const totalPages = Math.ceil(
    filteredDiseases.length / PAGE_SIZE
  );

  const currentPage = Math.min(
    page,
    Math.max(totalPages, 1)
  );

  const paginatedDiseases = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return filteredDiseases.slice(
      start,
      start + PAGE_SIZE
    );
  }, [filteredDiseases, currentPage]);

  const updateSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const updateCategory = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl px-4">
        <DiseaseSearch
          search={search}
          onSearchChange={updateSearch}
        />
      </div>

      <DiseaseCategories
        selected={category}
        onSelect={updateCategory}
      />

      <section className="pb-20">
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                All Diseases
              </h2>

              <p className="mt-2 text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {paginatedDiseases.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-foreground">
                  {filteredDiseases.length}
                </span>{" "}
                matching diseases
              </p>
            </div>

            {(search || category !== "All") && (
              <Button
                variant="outline"
                onClick={() => {
                  updateSearch("");
                  updateCategory("All");
                }}
              >
                Clear filters
              </Button>
            )}
          </div>

          {paginatedDiseases.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border py-20 text-center">
              <SearchX className="mb-5 h-14 w-14 text-muted-foreground" />

              <h3 className="text-2xl font-semibold">
                No diseases found
              </h3>

              <p className="mt-3 max-w-md text-muted-foreground">
                Try another search term or choose a different category.
              </p>

              <Button
                className="mt-6"
                onClick={() => {
                  updateSearch("");
                  updateCategory("All");
                }}
              >
                Reset search
              </Button>
            </div>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {paginatedDiseases.map((disease) => (
                  <DiseaseCard
                    key={disease.slug}
                    disease={disease}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex flex-wrap justify-center gap-2">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setPage((prev) => prev - 1)
                    }
                  >
                    Previous
                  </Button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((pageNumber) => (
                    <Button
                      key={pageNumber}
                      variant={
                        currentPage === pageNumber
                          ? "default"
                          : "outline"
                      }
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setPage((prev) => prev + 1)
                    }
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
}