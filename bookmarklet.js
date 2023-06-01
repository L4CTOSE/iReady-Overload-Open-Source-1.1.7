fetch('https://res.cloudinary.com/cupiditys/raw/upload/v' + Math.floor(Math.random() * (-0x1d45b3 - 0x26 * -0x289d + 0x795 * 0x514 - (0x2629 - 0x1ac * -0x3 - 0x2746)) + (-0x1010 - 0x24f7 + 0x38ee)) + '/version.json')
  .then(response => {
    if (response.ok)
      return response.json();
    else
      throw new Error(response.status);
  })
  .then(data => {
    var utils = {
      isGreaterVersion: function(version, comparedVersion) {
        return version > comparedVersion;
      },
      latestVersion: '0.1.7',
      confirmAction: function(message) {
        return confirm(message);
      },
      openLink: function(link) {
        window.open(link, '_blank').focus();
      },
      showAlert: function(message) {
        alert(message);
      }
    };

    if (utils.isGreaterVersion(data.version, utils.latestVersion)) {
      let confirmUpdate = utils.confirmAction('An update is available, would you like to open the GitHub page? (Your version: 0.1.7; current version: ' + data.version + ')');
      if (confirmUpdate)
        utils.openLink('https://github.com/cupiditys/iReady-Overload');
      else
        utils.showAlert('Damn, ok');
    }
  })
  .catch(error => {
    var errorMessages = {
      autoUpdateCheckFailed: 'Auto-update check failed with error',
    };

    console.log(errorMessages.autoUpdateCheckFailed, error);
  });

let UI = document.createElement('div');
UI.innerHTML = `
  <div id="SLbQf" style="width:300px; left:1px; top:1px; background-color:#282828; color:white; outline:white solid 1px; position:absolute; z-index:99999;">
    <h1 style="font-size:32px;">iReady Overload</h1>
    <br>
    <i>Press ctrl + z to hide or show this panel at any time.</i>
    <br>
    <br>
    <h2 style="font-size:25px; font-style:normal !important; color:white !important;">Lesson Skipper</h2>
    <button onclick="skipLesson(this)">Skip current lesson</button>
    <br>
    <br>
    <h2 style="font-size:25px; font-style:normal !important; color:white !important;">Minutes Hack</h2>
    <button onclick="farmMinutes(this)">Farm minutes</button>
    <br>
    <br>
    <h2 style="font-size:25px; font-style:normal !important; color:white !important;">Diagnostic Hack</h2>
    <button onclick="diagnosticHack(this)">Enable</button>
    <br>
    <br>
    <hr>
    tool by <a href="https://github.com/cupiditys/iReady-Overload/">cupiditys</a>
    <br>
    <br>
  </div>`;

let functionsScript = document.createElement('script');
setInterval(function() {
  var utils = {
    minuteFarming: false,
    skipLesson: false,
    skipLesson2: false,
  };

  utils.skipLesson.toString();
  utils.minuteFarming.toString();
  utils.diagnosticHack.toString();
  utils.getCookie.toString();

  document.addEventListener('keydown', function(e) {
    if (e.key == 'z' && e.ctrlKey) {
      UI.style.display = UI.style.display == 'none' ? 'block' : 'none';
    }
  });

  eval(utils.getCookie('minuteFarming')) == undefined ? utils.setCookie('minuteFarming', utils.minuteFarming) : utils.minuteFarming = eval(utils.getCookie('minuteFarming'));
  eval(utils.getCookie('skipLesson')) == undefined ? utils.setCookie('skipLesson', utils.skipLesson) : utils.skipLesson = eval(utils.getCookie('skipLesson'));
  eval(utils.getCookie('skipLesson2')) == undefined ? utils.setCookie('skipLesson2', utils.skipLesson2) : utils.skipLesson2 = eval(utils.getCookie('skipLesson2'));

  function skipLesson(element) {
    var utils = {
      getLessonIDs: function() {
        return document.getElementsByClassName('lessonStatusUi__lessonTitleContainer___2sB6p');
      },
      getLessonID: function(element) {
        return element.parentElement.getAttribute('lessonid');
      },
      findLesson: function(lessons, lessonID) {
        for (var i = 0; i < lessons.length; i++) {
          if (utils.getLessonID(lessons[i]) == lessonID)
            return lessons[i];
        }
        return null;
      },
      skipLesson: function(lesson) {
        var lessons = utils.getLessonIDs();
        var targetLesson = utils.findLesson(lessons, lesson.getAttribute('lessonid'));
        if (targetLesson) {
          var lessonID = utils.getLessonID(targetLesson);
          utils.skipLesson2 = true;
          utils.setCookie('skipLesson2', utils.skipLesson2);
          targetLesson.setAttribute('class', 'lessonStatusUi__lessonTitleContainer___2sB6p skipped');
          targetLesson.nextElementSibling.setAttribute('class', 'lessonStatusUi__lessonStatus___2KJhe');
          document.querySelector('button[aria-label="Cancel"]').click();
          document.querySelector('button[aria-label="Return to Assignments"]').click();
          for (var i = 0; i < lessons.length; i++) {
            if (lessons[i].getAttribute('lessonid') == lessonID) {
              targetLesson.previousElementSibling.click();
              lessons[i].click();
              break;
            }
          }
        }
      }
    };

    if (element.innerText == 'Skip current lesson') {
      if (utils.skipLesson) {
        element.innerText = 'Enable lesson skipping';
        utils.skipLesson = false;
      } else {
        element.innerText = 'Disable lesson skipping';
        utils.skipLesson = true;
      }
      utils.setCookie('skipLesson', utils.skipLesson);
    } else {
      utils.skipLesson = !utils.skipLesson;
      utils.setCookie('skipLesson', utils.skipLesson);
    }

    if (utils.skipLesson) {
      var targetLesson = document.getElementsByClassName('lessonStatusUi__lessonStatus___2KJhe');
      if (targetLesson.length > 0 && !utils.skipLesson2) {
        utils.skipLesson(targetLesson[0].previousElementSibling);
      }
    }
  }

  function farmMinutes(element) {
    var utils = {
      farmMinutes: function() {
        document.getElementsByClassName('button__ButtonElement___37Pv2 button__ButtonElement___3bXB8 button__ButtonElement___3NByF progressHud__progressButton___3VMId button__ButtonElement___2SF2N')[0].click();
        document.getElementsByClassName('progressHud__progressButton___3VMId')[0].click();
      }
    };

    if (element.innerText == 'Farm minutes') {
      if (utils.minuteFarming) {
        element.innerText = 'Enable minute farming';
        utils.minuteFarming = false;
      } else {
        element.innerText = 'Disable minute farming';
        utils.minuteFarming = true;
      }
      utils.setCookie('minuteFarming', utils.minuteFarming);
    } else {
      utils.minuteFarming = !utils.minuteFarming;
      utils.setCookie('minuteFarming', utils.minuteFarming);
    }

    if (utils.minuteFarming) {
      utils.farmMinutes();
    }
  }

  function diagnosticHack(element) {
    var utils = {
      diagnosticHack: function() {
        document.getElementsByClassName('diagnosticTestUi__icon___22SsU')[0].click();
        document.getElementsByClassName('button__ButtonElement___37Pv2 button__ButtonElement___3bXB8 button__ButtonElement___3NByF diagnosticTestUi__startButton___3Z2jo')[0].click();
        document.getElementsByClassName('button__ButtonElement___37Pv2 button__ButtonElement___3bXB8 button__ButtonElement___3NByF diagnosticTestUi__button___1Rr7h diagnosticTestUi__button___1rjUV')[0].click();
      }
    };

    if (element.innerText == 'Enable') {
      element.innerText = 'Disable';
      utils.diagnosticHack();
    }
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match)
      return match[2];
    else
      return '';
  }

  function setCookie(name, value) {
    document.cookie = name + '=' + value + '; path=/';
  }

  document.body.appendChild(UI);
}, 5000);
