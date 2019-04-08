::-- Creates a new user script based on the template folder (0)
@ECHO OFF
SETLOCAL

SET SCRIPTPATH=C:\xampp7\userscripts
SET TEMPLATEID=0


:loop
SET /A TEMPLATEID=%TEMPLATEID%+1
IF EXIST "%SCRIPTPATH%\%TEMPLATEID%" (
    GOTO :loop
    REM This id is taken, skip it
) 

SET DSTPATH=%SCRIPTPATH%\%TEMPLATEID%
SET SRCPATH=%SCRIPTPATH%\0

MKDIR "%DSTPATH%"
COPY "%SRCPATH%\config.json" "%DSTPATH%\config.json" >nul
COPY "%SRCPATH%\script.user.js" "%DSTPATH%\script.user.js" >nul

ECHO Created new user script
REM START explorer "%DSTPATH%\"
EXIT /B 0
