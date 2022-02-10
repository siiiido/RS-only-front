(() => {
  const read = document.querySelector(".read");

  const read_select = document.querySelector(".read_select");

  window.onload = () => {
    setTimeout(() => scrollTo(0, 0), 100);

    if (read_select && read) {
      (<HTMLElement>read_select).onchange = (e) => {
        if (e.target && (<HTMLInputElement>e.target).value == "1") {
          (<HTMLInputElement>read).readOnly = false;
          (<HTMLInputElement>read).value = "";
        } else {
          (<HTMLInputElement>read).value = (<HTMLInputElement>e.target).value;
          (<HTMLInputElement>read).readOnly = true;
        }
      };
    }
  };

  const one = document.querySelector(".one_to_one");
  const oneLi = document.querySelector(".one_li");
  const two = document.querySelector(".two_to_two");
  const twoLi = document.querySelector(".two_li");
  const three = document.querySelector(".three_to_three");
  const threeLi = document.querySelector(".three_li");
  const four = document.querySelector(".four_to_four");
  const fourLi = document.querySelector(".four_li");

  const sendElem = document.querySelector(".send_content");
  const oneClick = document.querySelector(".clickOneToOne");
  const twoClick = document.querySelector(".clickTwoToTwo");
  const threeClick = document.querySelector(".clickThreeToThree");
  const fourClick = document.querySelector(".clickFourToFour");
  const click = document.querySelector(".click");
  function clickHandler(e: Event) {
    if (
      e.target &&
      one &&
      oneClick &&
      twoClick &&
      threeClick &&
      fourClick &&
      (<HTMLInputElement>e.target).value == (<HTMLInputElement>one).value
    ) {
      (<HTMLInputElement>twoClick).style.display = "none";
      (<HTMLInputElement>threeClick).style.display = "none";
      (<HTMLInputElement>fourClick).style.display = "none";
      (<HTMLInputElement>oneClick).style.display = "block";

      oneClick.innerHTML =
        " " +
        "<div class='uni_radio'>" +
        "      <label>매칭 상대방 학교</label>" +
        "      <div class='choose_uni_radio'>" +
        "        <li class='ccx_li'>" +
        "          <!-- input의 id와 label의 for가 같게해야 value가 넘어옴, id가 value보다 먼저 나와야함 -->" +
        "          <input id='ccx' name='html_preference' type='radio' value='DIFF' />" +
        "          <label for='ccx' class='ccx_label'>다른 학교</label>" +
        "        </li>" +
        "        <li class='cco_li'>" +
        "          <input id='cco' name='html_preference' type='radio' value='SAME' />" +
        "          <label for='cco' class='cco_label'>우리 학교</label>" +
        "        </li>" +
        "        <li class='anything_li'>" +
        "          <input" +
        "            id='anything'" +
        "            name='html_preference'" +
        "            type='radio'" +
        "            value='ALL'" +
        "          />" +
        "          <label for='anything' class='anything_label'>모든 학교</label>" +
        "        </li>" +
        "      </div>" +
        "    </div>" +
        "    <div class='whole_question'>" +
        "      <ul>" +
        "        <div class='radio_items'>" +
        "          <h5>벚꽃 구경은</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q1_left' name='html_Q01' type='radio' value='left' />" +
        "              <label for='q1_left' class='left_label'>광안리!!</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q1_right' name='html_Q01' type='radio' value='right' />" +
        "              <label for='q1_right' class='right_label'>달맞이!!</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>벚꽃 구경은</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q2_left' name='html_Q02' type='radio' value='left' />" +
        "              <label for='q2_left' class='left_label'>동성 친구</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q2_right' name='html_Q02' type='radio' value='right' />" +
        "              <label for='q2_right' class='right_label'>이성 친구</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>벚꽃 구경은</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q3_left' name='html_Q03' type='radio' value='left' />" +
        "              <label for='q3_left' class='left_label'>낮이 최고</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q3_right' name='html_Q03' type='radio' value='right' />" +
        "              <label for='q3_right' class='right_label'>밤이 최고</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>맛집 찾기는</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q4_left' name='html_Q04' type='radio' value='left' />" +
        "              <label for='q4_left' class='left_label'>인스타그램</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q4_right' name='html_Q04' type='radio' value='right' />" +
        "              <label for='q4_right' class='right_label'>네이버</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>맛집 웨이팅</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q5_left' name='html_Q05' type='radio' value='left' />" +
        "              <label for='q5_left' class='left_label'>최대 30분</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q5_right' name='html_Q05' type='radio' value='right' />" +
        "              <label for='q5_right' class='right_label'>최대 17시간</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>유튜브 시청시간</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q6_left' name='html_Q06' type='radio' value='left' />" +
        "              <label for='q6_left' class='left_label'>1시간 미만</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q6_right' name='html_Q06' type='radio' value='right' />" +
        "              <label for='q6_right' class='right_label'>1시간 이상</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>운동은</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q7_left' name='html_Q07' type='radio' value='left' />" +
        "              <label for='q7_left' class='left_label'>주 3회 이상</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q7_right' name='html_Q07' type='radio' value='right' />" +
        "              <label for='q7_right' class='right_label'>주 3회 미만</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>선호하는 동물은?</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q8_left' name='html_Q08' type='radio' value='left' />" +
        "              <label for='q8_left' class='left_label'>미어캣</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q8_right' name='html_Q08' type='radio' value='right' />" +
        "              <label for='q8_right' class='right_label'>알파카</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>선호하는 영화 장르는?</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q9_left' name='html_Q09' type='radio' value='left' />" +
        "              <label for='q9_left' class='left_label'>다큐멘터리</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input id='q9_right' name='html_Q09' type='radio' value='right' />" +
        "              <label for='q9_right' class='right_label'>액션</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "        <div class='radio_items'>" +
        "          <h5>선호하는 휴양지는?</h5>" +
        "          <br />" +
        "          <div class='radio_li_con'>" +
        "            <li class='left'>" +
        "              <input id='q10_left' name='html_Q10' type='radio' value='left' />" +
        "              <label for='q10_left' class='left_label'>우리집</label>" +
        "            </li>" +
        "            <li class='right'>" +
        "              <input" +
        "                id='q10_right'" +
        "                name='html_Q10'" +
        "                type='radio'" +
        "                value='right'" +
        "              />" +
        "              <label for='q10_right' class='right_label'>몰디브</label>" +
        "            </li>" +
        "          </div>" +
        "        </div>" +
        "      </ul>" +
        "    </div>";

      if (oneLi && twoLi && threeLi && fourLi) {
        twoLi.classList.remove("group_color");
        threeLi.classList.remove("group_color");
        fourLi.classList.remove("group_color");
        oneLi.classList.add("group_color");
      }
    } else if (
      e.target &&
      two &&
      (<HTMLInputElement>e.target).value == (<HTMLInputElement>two).value
    ) {
      if (
        oneClick &&
        twoClick &&
        threeClick &&
        fourClick &&
        oneLi &&
        twoLi &&
        threeLi &&
        fourLi
      ) {
        (<HTMLInputElement>threeClick).style.display = "none";
        (<HTMLInputElement>fourClick).style.display = "none";
        (<HTMLInputElement>oneClick).style.display = "none";
        (<HTMLInputElement>twoClick).style.display = "block";

        twoClick.innerHTML =
          "" +
          "      <p class='group_ment'>2:2 매칭은 한 명의 카카오톡ID만 등록합니다</p>" +
          "          <p class='group_ment'>" +
          "            매칭 상대 역시 같은 그룹 매칭을 신청한 상대입니다" +
          "          </p>" +
          "          <!-- <p class='group_ment'>신청 이후 다른 매칭으로 중복 신청은 안됩니다</p> -->" +
          "          <p class='group_ment'>자세한 사항은 <a href='https://pf.kakao.com/_ExmxkkK/65944735'>새봄 페이지</a>를 참고해주세요!</p>" +
          "          <br />";

        threeLi.classList.remove("group_color");
        fourLi.classList.remove("group_color");
        oneLi.classList.remove("group_color");
        twoLi.classList.add("group_color");
      }
    } else if (
      e.target &&
      three &&
      oneClick &&
      twoClick &&
      threeClick &&
      fourClick &&
      (<HTMLInputElement>e.target).value == (<HTMLInputElement>three).value
    ) {
      (<HTMLInputElement>twoClick).style.display = "none";
      (<HTMLInputElement>fourClick).style.display = "none";
      (<HTMLInputElement>oneClick).style.display = "none";
      (<HTMLInputElement>threeClick).style.display = "block";

      threeClick.innerHTML =
        "" +
        "      <p class='group_ment'>3:3 매칭은 한 명의 카카오톡ID만 등록합니다</p>" +
        "          <p class='group_ment'>" +
        "            매칭 상대 역시 같은 그룹 매칭을 신청한 상대입니다" +
        "          </p>" +
        "          <!-- <p class='group_ment'>신청 이후 다른 매칭으로 중복 신청은 안됩니다</p> -->" +
        "          <p class='group_ment'>자세한 사항은 <a href='https://pf.kakao.com/_ExmxkkK/65944735'>새봄 페이지</a>를 참고해주세요!</p>" +
        "          <br />";

      if (oneLi && twoLi && threeLi && fourLi) {
        twoLi.classList.remove("group_color");
        fourLi.classList.remove("group_color");
        oneLi.classList.remove("group_color");
        threeLi.classList.add("group_color");
      }
    } else if (
      e.target &&
      four &&
      oneClick &&
      twoClick &&
      threeClick &&
      fourClick &&
      (<HTMLInputElement>e.target).value == (<HTMLInputElement>four).value
    ) {
      (<HTMLInputElement>twoClick).style.display = "none";
      (<HTMLInputElement>threeClick).style.display = "none";
      (<HTMLInputElement>oneClick).style.display = "none";
      (<HTMLInputElement>fourClick).style.display = "block";

      fourClick.innerHTML =
        "" +
        "      <p class='group_ment'>4:4 매칭은 한 명의 카카오톡ID만 등록합니다</p>" +
        "          <p class='group_ment'>" +
        "            매칭 상대 역시 같은 그룹 매칭을 신청한 상대입니다" +
        "          </p>" +
        "          <!-- <p class='group_ment'>신청 이후 다른 매칭으로 중복 신청은 안됩니다</p> -->" +
        "          <p class='group_ment'>자세한 사항은 <a href='https://pf.kakao.com/_ExmxkkK/65944735'>새봄 페이지</a>를 참고해주세요!</p>" +
        "          <br />";

      if (oneLi && twoLi && threeLi && fourLi) {
        oneLi.classList.remove("group_color");
        twoLi.classList.remove("group_color");
        threeLi.classList.remove("group_color");
        fourLi.classList.add("group_color");
      }
    }

    const ccx_label = document.querySelector(".ccx_label");
    const ccx_li = document.querySelector(".ccx_li");
    const cco_li = document.querySelector(".cco_li");
    const anything_li = document.querySelector(".anything_li");
    const cco_label = document.querySelector(".cco_label");
    const anything_label = document.querySelector(".anything_label");

    if (
      ccx_li &&
      cco_li &&
      anything_li &&
      (e.target === ccx_label || e.target === ccx_li)
    ) {
      // add ccx
      cco_li.classList.remove("sky");
      ccx_li.classList.add("sky");
      anything_li.classList.remove("sky");
    } else if (
      cco_li &&
      ccx_li &&
      anything_li &&
      (e.target === cco_label || e.target === cco_li)
    ) {
      // add cco
      cco_li.classList.add("sky");
      ccx_li.classList.remove("sky");
      anything_li.classList.remove("sky");
    } else if (
      cco_li &&
      ccx_li &&
      anything_li &&
      (e.target === anything_li || e.target === anything_label)
    ) {
      // add anything
      cco_li.classList.remove("sky");
      ccx_li.classList.remove("sky");
      anything_li.classList.add("sky");
    }

    const left_label = document.querySelectorAll(".left_label");
    const right_label = document.querySelectorAll(".right_label");

    for (let i = 0; i < 10; i++) {
      const target = <HTMLElement>(<HTMLElement>e.target).parentNode;

      if (target.nextElementSibling && e.target === left_label[i]) {
        target.nextElementSibling.classList.remove("sky");
        target.classList.remove("black");
        target.classList.add("sky");
        target.nextElementSibling.classList.add("black");
      } else if (target.previousElementSibling && e.target === right_label[i]) {
        target.classList.remove("black");
        target.previousElementSibling.classList.remove("sky");
        target.classList.add("sky");
        target.previousElementSibling.classList.add("black");
      }
    }
  }

  if (sendElem) {
    sendElem.addEventListener("click", clickHandler);
  }

  window.addEventListener("submit", (e) => {
    // form 전체를 받아서 name으로 value를 찾자
    const form_field = document.querySelector(".form_field");

    //몇 명 매칭하는지
    if (form_field instanceof HTMLFormElement) {
      const matchingGroup = form_field.html_option.value;
      // 대학교 value
      const option_value =
        form_field.html_university.options[
          form_field.html_university.selectedIndex
        ].value;

      // 이미지
      const img_value = form_field.html_image.files[0];

      // 카카오 value
      const kakao_value = form_field.html_contact.value;

      if (one instanceof HTMLInputElement && one.value == matchingGroup) {
        // 대학교 선호
        const uni_radio = form_field.html_preference.value;

        const q1 = form_field.html_Q01.value;
        const q2 = form_field.html_Q02.value;
        const q3 = form_field.html_Q03.value;
        const q4 = form_field.html_Q04.value;
        const q5 = form_field.html_Q05.value;
        const q6 = form_field.html_Q06.value;
        const q7 = form_field.html_Q07.value;
        const q8 = form_field.html_Q08.value;
        const q9 = form_field.html_Q09.value;
        const q10 = form_field.html_Q10.value;

        if (option_value == "") {
          alert("대학교를 선택해 주세요.");
          e.preventDefault();
        }
        if (img_value == null) {
          alert("학생증을 인증해 주세요");
          e.preventDefault();
        }
        if (kakao_value == "") {
          alert("카카오톡ID를 입력해 주세요");
          e.preventDefault();
        }
        if (uni_radio == "") {
          alert("선호 학교를 선택해 주세요");
          e.preventDefault();
        }
        if (q1 == "") {
          alert("첫번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q2 == "") {
          alert("두번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q3 == "") {
          alert("세번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q4 == "") {
          alert("네번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q5 == "") {
          alert("다섯번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q6 == "") {
          alert("여섯번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q7 == "") {
          alert("일곱번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q8 == "") {
          alert("여덟번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q9 == "") {
          alert("아홉번째 질문을 선택해 주세요");
          e.preventDefault();
        }
        if (q10 == "") {
          alert("열번째 질문을 선택해 주세요");
          e.preventDefault();
        }
      } else if (
        two instanceof HTMLInputElement &&
        matchingGroup == two.value
      ) {
        if (option_value == "") {
          alert("대학교를 선택해 주세요.");
          e.preventDefault();
        }
        if (img_value == null) {
          alert("학생증을 인증해 주세요");
          e.preventDefault();
        }
        if (kakao_value == "") {
          alert("카카오톡ID를 입력해 주세요");
          e.preventDefault();
        }
      }
    }
  });
})();
