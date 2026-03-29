function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  
  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  
  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};
  const props = ["containerId", "destination", "weight", "unit", "hazmat"];

  props.forEach(prop => {
    if (!(prop in manifest)) {
      errors[prop] = "Missing";
    }
  });

  if (manifest.containerId !== undefined) {
    if (typeof manifest.containerId !== 'number' || !Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
      errors.containerId = "Invalid";
    }
  }

  if (manifest.destination !== undefined) {
    if (typeof manifest.destination !== 'string' || manifest.destination.trim().length === 0) {
      errors.destination = "Invalid";
    }
  }

  if (manifest.weight !== undefined) {
    if (typeof manifest.weight !== 'number' || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
      errors.weight = "Invalid";
    }
  }

  if (manifest.unit !== undefined) {
    if (manifest.unit !== "kg" && manifest.unit !== "lb") {
      errors.unit = "Invalid";
    }
  }

  if (manifest.hazmat !== undefined) {
    if (typeof manifest.hazmat !== 'boolean') {
      errors.hazmat = "Invalid";
    }
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  const isValid = Object.keys(errors).length === 0;

  if (isValid) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${normalized.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}