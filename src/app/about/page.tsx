import Image from "next/image";
import styles from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <h2>NextJS와 관련된 정보를 모아두는 블로그</h2>
          <p>
            NextJS 습득을 위해 만들어 온 토이 프로젝트들과 각 프로젝트를
            진행하면서 알게 된 정보들을 기록해두는 블로그입니다. <br /> 클릭 시
            해당 git repo로 이동됩니다.
          </p>
        </div>
        <div className={styles.listContainer}>
          <h3>List of Private Toy Projects created by NextJS</h3>
          <ul>
            <Link href={"https://github.com/55555-Jyeon/mobigram"}>
              <li>
                <Image
                  width={180}
                  height={100}
                  src={"/images/mobigram.png"}
                  alt="mobigram thumbnail"
                />
                <h4>05. mobigram</h4>
                <p>z.com에서 배운 내용 복습/응용을 위한 모비그램 만들기</p>
              </li>
            </Link>
            <Link href={"https://github.com/55555-Jyeon/nextLog"}>
              <li>
                <Image
                  width={180}
                  height={100}
                  src={"/images/blog.png"}
                  alt="next14 blog thumbnail"
                />
                <h4>04. next-blog 만들기</h4>
                <p>next의 가장 기본이 되는 마크다운 파일 블로그 만들기</p>
              </li>
            </Link>
            <Link href={"https://github.com/55555-Jyeon/portfolio"}>
              <li>
                <Image
                  width={180}
                  height={100}
                  src={"/images/portfolio.png"}
                  alt="portfolio thumbnail"
                />
                <h4>03. portfolio</h4>
                <p>portfolio 웹 페이지 next14로 만들어보기</p>
              </li>
            </Link>
            <Link href={"https://github.com/55555-Jyeon/z-com"}>
              <li>
                <Image
                  width={180}
                  height={100}
                  src={"/images/zcom.png"}
                  alt="z.com thumbnail"
                />
                <h4>02. z.com clone coding</h4>
                <p>inflearn에서 유로 강의로 수강한 제로초 강의</p>
              </li>
            </Link>
            <Link href={"https://github.com/55555-Jyeon/MovieTrailors"}>
              <li>
                <Image
                  width={180}
                  height={100}
                  src={"/images/movietrailer.png"}
                  alt="movie trailer thumbnail"
                />
                <h4>01. movie trailer</h4>
                <p>nomadcoders에서 수강한 무료 강의</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
}
