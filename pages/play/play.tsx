import { useQuery, gql } from "@apollo/client";
import { Spinner, Box, Card, CardBody, Paragraph, Clock, Text } from "grommet";
import { useState } from "react";

import Score from "../../components/play/Score";
import AnswerButtons from "../../components/play/AnswerButtons";
import Trauma from "../../components/play/Trauma";
import TraumaTreatment from "../../components/play/TraumaTreatment";
import NextQuestionButton from "../../components/play/NextQuestionButton";

export default function Play() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState("PT0H0M00S");
  const [stoppedTime, setStoppedTime] = useState("");
  const [isLastAnswerCorrect, setIsLastAnswerCorrect] = useState(false);

  const RANDOM_TRAUMATA_QUERY = gql`
    query RandomTraumata($n: Int!) {
      randomTraumata(n: $n) {
        id
        diagnose
        location
        makeup
        gender
        a
        b
        c
        d
        eSampleTraumacheck
        eMonitoring
        firstAid
        paramedicAid
        emergencyDoctor
        triageGroup
      }
    }
  `;

  const { data, error, loading, refetch } = useQuery(RANDOM_TRAUMATA_QUERY, {
    variables: { n: 15 },
  });

  if (loading) {
    return (
      <Box align="center" pad={{ top: "xlarge" }}>
        <Spinner size="large" message="Lädt..."></Spinner>
      </Box>
    );
  }

  if (error) {
    return (
      <Box align="center" pad={{ top: "xlarge" }}>
        <Paragraph fill>
          Hoppla, irgendetwas ist schiefgelaufen {error.message}
        </Paragraph>
      </Box>
    );
  }

  const handleNextQuestionClick = () => {
    setShowAnswer(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.randomTraumata.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setIsLastAnswerCorrect(true);
    } else {
      setIsLastAnswerCorrect(false);
    }
    setShowAnswer(true);
  };

  const handlePlayAgainClick = () => {
    setTime("PT0H0M00S");
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
    refetch();
  };

  return (
    <>
      <Box pad="medium" align="center">
        <Card width="800px" background="light">
          <CardBody pad="large">
            {showScore ? (
              <Score
                stoppedTime={stoppedTime}
                score={score}
                data={data}
                handlePlayAgainClick={handlePlayAgainClick}
              />
            ) : (
              <>
                <Box>
                  <Text
                    margin={{ left: "auto", bottom: "xsmall" }}
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    {score} von {data?.randomTraumata.length} korrekt triagiert
                  </Text>
                  <Clock
                    margin={{ left: "auto" }}
                    type="digital"
                    time={time}
                    onChange={(t) => {
                      setStoppedTime(t.replace("P", "PT"));
                    }}
                  />
                  {!showAnswer && (
                    <>
                      <Trauma data={data} currentQuestion={currentQuestion} />
                      <AnswerButtons
                        handleAnswerOptionClick={handleAnswerOptionClick}
                        data={data}
                        currentQuestion={currentQuestion}
                      />
                    </>
                  )}
                  {showAnswer && (
                    <>
                      <TraumaTreatment
                        data={data}
                        currentQuestion={currentQuestion}
                        isLastAnswerCorrect={isLastAnswerCorrect}
                      />
                      <NextQuestionButton
                        data={data}
                        nextQuestion={currentQuestion + 1}
                        handleNextQuestionClick={handleNextQuestionClick}
                      />
                    </>
                  )}
                </Box>
              </>
            )}
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
