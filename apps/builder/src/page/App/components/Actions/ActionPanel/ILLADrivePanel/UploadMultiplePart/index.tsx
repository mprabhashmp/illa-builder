import { FC } from "react"
import { useTranslation } from "react-i18next"
import { CODE_LANG } from "@/components/CodeEditor/CodeMirror/extensions/interface"
import { InputEditor } from "@/page/App/components/Actions/InputEditor"
import { UploadMultipleContent } from "@/redux/currentApp/action/illaDriveAction"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { SingleTypeComponent } from "../../SingleTypeComponent"
import { ILLADriveActionPartProps } from "../interface"

export const UploadMultiplePart: FC<ILLADriveActionPartProps> = (props) => {
  const { t } = useTranslation()

  const commandArgs = props.commandArgs as UploadMultipleContent
  const { handleOptionsValueChange } = props

  return (
    <>
      <SingleTypeComponent
        title={t("editor.action.panel.label.drive.overwrite")}
        tips={t("editor.action.panel.label.tips.drive.overwrite")}
        value={commandArgs.overwriteDuplicate}
        componentType="switch"
        onChange={(value) =>
          handleOptionsValueChange("overwriteDuplicate", value)
        }
      />
      <InputEditor
        title={t("editor.action.panel.label.drive.file_name_array")}
        tips={t("editor.action.panel.label.drive.file_name_array")}
        placeholder={t("editor.action.panel.label.drive.file_name_array")}
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.fileNameArray}
        onChange={(value) => handleOptionsValueChange("fileNameArray", value)}
        expectedType={VALIDATION_TYPES.ARRAY}
      />

      <InputEditor
        title={t("editor.action.panel.label.drive.file_data_array")}
        tips={t("editor.action.panel.label.tips.drive.file_data_array")}
        placeholder={t(
          "editor.action.panel.label.placeholder.drive.file_data_array",
        )}
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.fileDataArray}
        onChange={(value) => handleOptionsValueChange("fileDataArray", value)}
        expectedType={VALIDATION_TYPES.ARRAY}
      />

      <InputEditor
        title={t("editor.action.panel.label.drive.file_type_array")}
        tips={t("editor.action.panel.label.tips.drive.file_type_array")}
        placeholder={t("editor.action.panel.label.placeholder.file_type_array")}
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.fileTypeArray}
        onChange={(value) => handleOptionsValueChange("fileTypeArray", value)}
        expectedType={VALIDATION_TYPES.ARRAY}
      />
      <InputEditor
        title={t("editor.action.panel.label.drive.folder")}
        tips={t("editor.action.panel.label.tips.drive.folder")}
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.path}
        onChange={(value) => handleOptionsValueChange("path", value)}
        expectedType={VALIDATION_TYPES.STRING}
      />
    </>
  )
}

UploadMultiplePart.displayName = "UploadMultiplePart"
