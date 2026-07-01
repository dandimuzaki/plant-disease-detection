type ModelResult = {
  description: string;
  trainAccuracy: string;
  valAccuracy: string;
  precision: string;
  recall: string;
  f1Score: string;
  trainingTime: string;
  inferenceTime: string;
};

const models: Record<string, ModelResult> = {
  "Custom CNN": {
    description: "Arsitektur CNN yang dibangun dari awal sebagai baseline penelitian.",
    trainAccuracy: "94.2%",
    valAccuracy: "91.8%",
    precision: "91.3%",
    recall: "90.8%",
    f1Score: "91.0%",
    trainingTime: "18 menit",
    inferenceTime: "52 ms",
  },
  MobileNet: {
    description: "Ringan dan cepat sehingga cocok untuk perangkat dengan sumber daya terbatas.",
    trainAccuracy: "96.5%",
    valAccuracy: "94.7%",
    precision: "94.8%",
    recall: "94.6%",
    f1Score: "94.7%",
    trainingTime: "14 menit",
    inferenceTime: "28 ms",
  },
  ResNet50: {
    description: "Memanfaatkan residual connection sehingga mampu mempelajari jaringan yang lebih dalam.",
    trainAccuracy: "98.1%",
    valAccuracy: "96.8%",
    precision: "96.9%",
    recall: "96.7%",
    f1Score: "96.8%",
    trainingTime: "36 menit",
    inferenceTime: "40 ms",
  },
  EfficientNet: {
    description: "Menyeimbangkan akurasi dan efisiensi melalui teknik compound scaling.",
    trainAccuracy: "98.7%",
    valAccuracy: "97.5%",
    precision: "97.6%",
    recall: "97.4%",
    f1Score: "97.5%",
    trainingTime: "31 menit",
    inferenceTime: "33 ms",
  },
};

const rows = [
  {
    label: "Karakteristik",
    key: "description",
  },
  {
    label: "Training Accuracy",
    key: "trainAccuracy",
  },
  {
    label: "Validation Accuracy",
    key: "valAccuracy",
  },
  {
    label: "Precision",
    key: "precision",
  },
  {
    label: "Recall",
    key: "recall",
  },
  {
    label: "F1 Score",
    key: "f1Score",
  },
  {
    label: "Training Time",
    key: "trainingTime",
  },
  {
    label: "Inference Time",
    key: "inferenceTime",
  },
] as const;

export default function ModelComparisonTable() {
  const modelNames = Object.keys(models);

  return (
    <div className="w-full mt-4 lg:mt-6 overflow-x-auto rounded-xl border border-accent-bg">
      <table className="min-w-full border-collapse text-xs lg:text-sm">
        <thead className="bg-accent-bg text-white">
          <tr>
            <th className="px-4 py-3 text-left">Indikator</th>
            {modelNames.map((model) => (
              <th key={model} className="px-4 py-3 text-center">
                {model}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-b hover:bg-primary/50">
              <td className="bg-gray-50 px-4 py-3 font-semibold">
                {row.label}
              </td>

              {modelNames.map((model) => (
                <td key={model} className="px-4 py-3 text-center">
                  {models[model][row.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}